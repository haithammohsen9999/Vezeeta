import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireauth:AngularFireAuth, private router:Router  ) { }
  // constructor (){}

    // login methed

  login(email:string ,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/Home'])
    },err =>{
      alert(err.message);
      this.router.navigate(['/signIn'])
    })
  }

  // register method
  register(email:string ,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registeration Successful')
      this.router.navigate(['/signIn'])
    } ,err=>{
      alert(err.message);
      this.router.navigate(['/SignUp'])
    })
  }

  // signOut
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/signIn'])
    }, err=>{
      alert(err.message);
    })
  }

}
