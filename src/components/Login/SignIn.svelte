<script>

import {db} from '../firebase/firebase'

let username,password;

const logMeIn =()=>{
    console.log('logged in!')
}

const tryAgain=()=>{
    console.log('try again')
}

const buttonClick = ()=>{

db.collection('login').onSnapshot(snaps=>{ // function begins

    // if his credentials is correct, allow him to access his data!
    let ExistAtDatabase = snaps.docs.filter(item=>item.data().username===username && item.data().password===password).length>0;

    if(ExistAtDatabase){ // we got two checks!
        logMeIn();
    }else{
        tryAgain();
    }
})   
}
</script>

<main>
    SignIn<br/>
    <input type="text" bind:value={username} placeholder="Enter your username"/> <br/>
    <input type="password" bind:value={password} placeholder="Enter your password"/> <br/>
    <button on:click={buttonClick}>SignIn</button>
</main>