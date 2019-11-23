<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Mail\TestEmail;
use App\User;
use Dotenv\Validator;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Rutas protegidas excluyendo las funciones que se indican
        // Para hacer logout es necesario tener un token válido, por eso está protegida
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required'
        ]);

        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    }

    public function register(Request $request)
    {

        $validator = request()->validate([
            'name' => 'required',
            'email' => 'required|unique:users|max:255',
            'password' => 'required'
        ], [
            'required'    => 'The :attribute and :other is required.',
        ]);

        try {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'message'   =>  $e->message(),
            ], 500);
        }

        return response()->json([
            'success'   =>  true,
            'data'      =>  $user
        ], 200);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
}
