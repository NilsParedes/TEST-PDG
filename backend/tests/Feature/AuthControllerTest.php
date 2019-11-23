<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function testRegister()
    {
        $response = $this->json(
            'POST',
            'api/auth/register',
            [
                'name' => 'Nils Paredes',
                'email' => 'nils.parsa@gmail.com',
                'password' => '1234'
            ]
        );

        $response->assertStatus(200);
    }

    public function testLogin()
    {
        $response = $this->json(
            'POST',
            'api/auth/login',
            [
                'email' => 'nils.parsa@gmail.com',
                'password' => '1234'
            ]
        );

        $response->assertStatus(200);
    }

    public function testSendEmail()
    {

        $response = $this->json(
            'POST',
            'api/auth/reset-password/create',
            [
                'email' => 'nils.parsa@gmail.com'
            ]
        );

        $response->assertStatus(200);
    }

}
