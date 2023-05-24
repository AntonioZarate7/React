import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

export class Auth {

    /**
     * Funcion para el regidtro del usuario a Firebase
     * @param {*} email -----> Email con el que se va registrar
     * @param {*} password --> Password de la cuenta 
     * @author AntonioZarate
     */
    async register(email, password) {
        try{
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
        }catch(error){
            throw error;
        }    
    }

    /**
     * Cierra la sesion de logueo en Firebase
     * @author AntonioZarate
     */
    async logout(){
        try{
            const auth = getAuth();
            await signOut(auth);
        }catch(error){
            throw error;
        }
    }

    async login(email, password){
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);

    }
}