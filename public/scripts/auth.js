const signInForm = document.querySelector('.sign-in');
const signUpForm = document.querySelector('.sign-up');
// console.log(signInForm);
if (signInForm) {
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const {name, password} = e.target;
        console.log(password);
        const res = await fetch('/api/auth/sign-in', {
            method:'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                password: password.value,
            }),
        });
        const data = await res.json();
        if (data.message === 'success') {
            window.location.assign('/')
        } else {
            alert (data.message);
        }
    });
}
///////
if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const {name, password} = e.target;
        console.log(password.value);
        const res = await fetch('/api/auth/sign-up', {
            method:'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                password: password.value,
            }),
        });
        const data = await res.json();
        if (data.message === 'success') {
            window.location.assign('/')
        } else {
            alert (data.message);
        }
    });
}