import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifierService } from 'angular-notifier';

declare function init_plugins();
declare var Swal: any;

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
})
export class ResetComponent implements OnInit {

    private token;

    private readonly notificacion: NotifierService;

    constructor(private authService: AuthService, private router: Router, private activateRoute: ActivatedRoute, notifierService: NotifierService) {
        this.notificacion = notifierService;
    }

    ngOnInit() {
        init_plugins();
        this.token = this.activateRoute.snapshot.paramMap.get('token');
    }

    reset(form: NgForm) {
        if (form.valid && form.value.password === form.value.password2) {
            this.authService.resetPassword({ password: form.value.password, token: this.token })
                .subscribe(
                    res => {
                        this.notificacion.notify('info', 'Password actualizado correctamente');
                        setTimeout(() => {
                            this.router.navigate(['/login']);
                        }, 1000);
                    }, err => {
                        this.notificacion.notify('error', 'Oops, ocurrió un error inesperado :c');
                    }
                );
        } else {
            this.notificacion.notify('error', 'Las contraseñas no coinciden...');
        }
    }

}