<script>
    let userChoice = "";

    const setUserChoice = (guest) => (userChoice = guest);

    let choice = {
        signIn: "signin",
        signUp: "signup",
    };

    import SignUp from "./SignUp.svelte";
    import SignIn from "./SignIn.svelte";
</script>

<table>
    <tr>
        <td><button on:click={() => setUserChoice(choice.signUp)}>Sign Up</button>
        </td>
        <td><button on:click={() => setUserChoice(choice.signIn)}>Sign In</button>
        </td>
    </tr>
</table>

{#if userChoice === choice.signIn}
    <SignIn />
{:else if userChoice === choice.signUp}
    <SignUp />
{/if}
