import router from '@/router';

export function checkUser(error){

    console.log(error)

    if(error){
    //Si la variable error es nulles que no hay ningun error.
       return  router.push('/sinAcceso')
    }
}
