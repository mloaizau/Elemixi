import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-confirmacion',
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrls: ['./mensaje-confirmacion.component.scss'],
})
export class MensajeConfirmacionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

}
