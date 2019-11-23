import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifierService } from 'angular-notifier';

declare function init_plugins();
declare var Swal: any;

@Component({
    selector: 'app-send',
    templateUrl: './sendEmail.component.html'
})
export class SendEmailComponent implements OnInit {

    private readonly notificacion: NotifierService;

    constructor(private authService: AuthService, private router: Router, notifierService: NotifierService) {
        this.notificacion = notifierService;
    }

    ngOnInit() {
        init_plugins();
    }

    sendEmail(form: NgForm) {
        if (form.valid) {
            this.authService.sendEmail({ email: form.value.email })
                .subscribe(
                    res => {
                        this.notificacion.notify('info', 'Email enviado correctamente');
                        setTimeout(() => {
                            this.router.navigate(['/login']);
                        }, 1000);                    }, err => {
                        this.notificacion.notify('error', 'Oops, ocurrió un error inesperado :c');
                    }
                );
        } else {
            this.notificacion.notify('error', 'Datos no válidos...');
        }
    }

}