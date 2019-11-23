import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { NotifierService } from 'angular-notifier';

declare function init_plugins();

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

    private readonly notificacion: NotifierService;

    constructor(private authService: AuthService, private router: Router, notifierService: NotifierService) {
        this.notificacion = notifierService;
    }

    ngOnInit() {
        init_plugins();
    }

    registrarse(form: NgForm) {
        if (form.valid) {
            if (form.value.password === form.value.password2) {
                this.authService.register(form.value)
                    .subscribe(res => {
                        this.notificacion.notify('info', 'Registro actualizado correctamente');
                        this.router.navigate(['/login']);
                    },
                        err => {
                            this.notificacion.notify('error', 'El email ya se encuentra registrado :c');
                        });
            } else {
                this.notificacion.notify('error', 'Las contraseñas no coinciden...');
            }

        } else {
            this.notificacion.notify('error', 'Complete todos los campos...');
        }
    }

}