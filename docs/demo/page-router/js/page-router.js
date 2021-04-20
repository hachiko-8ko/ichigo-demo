class LoginView extends mi5.component.Component {
	constructor() {
		super({
			type: 'div',
			id: 'loginView',
			innerHtml: `
				<form class="needs-validation" id="loginForm" novalidate :event (submit)="login">
					<div class="row">
						<div class="col">
							<!-- Padding in mdb 5 is less nice aesthetically than in 4. Sure, it's compact, which
							is sometimes good, but it doesn't allow enough space for an error message.-->
							<div class="input-group form-outline mb-4">
								<input name="userName" class="form-control" required />
								<label class="form-label" for="userName">User Name</label>
								<div class="invalid-feedback">Please enter your username</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="input-group form-outline mb-4">
								<input type="password" name="password" class="form-control" required />
								<label class="form-label" for="password">Password</label>
								<div class="invalid-feedback">Please enter your password</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 col-md-6">
							<button type="submit" class="btn btn-primary w-100" id="btnLogin">Log In</button>
						</div>
						<div class="col-12 col-md-6">
							<button type="button" class="btn btn-light w-100" id="btnCancel">Cancel</button>
						</div>
					</div>
				</form>
			`
		});

		// If I wanted to be fancy, Here I would redirect if user is already logged in (sessionStorage.userName set).
		// But then I'd have to implement a logout method. This example is complex enough already.

		this.form = this.content.querySelector('#loginForm');

		// Style the MDB form fields that were dynamically added
		this.content.querySelectorAll('.form-outline').forEach((formOutline) => {
			new mdb.Input(formOutline).init();
		});

		// Turn on validation for MDB form that was dynamically added.
		// Bootstrap documentation says to send false for useCapture. This is wrong.
		this.content.querySelectorAll('.needs-validation').forEach((form) => {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, true);
		});

		// This must follow the bootstrap event (2 submit events)
		this.addInlineEventListeners();
	}

	login(evt) {
		evt.preventDefault();

		const data = {};
		for (const inp of this.form.elements) {
			if (inp.name) {
				data[inp.name] = inp.value;
			}
		}

		// This password is very secure
		if (data.userName && data.password === 'password') {
			sessionStorage.setItem('userName', data.userName);
			mi5.router.PageRouter.route('home');
		} else {
			// Not going to spend the effort on making a special alert
			alert('Incorrect user name or password');
		}
	}
}

class ChoiceView extends mi5.component.Component {
	constructor() {
		const userName = sessionStorage.getItem('userName');
		super({
			type: 'div',
			id: 'choiceView',
			innerHtml: `
				<div class="row pb-4">
					<div class="col">
						Please pick a door, ${userName}.
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-md-6">
						<a class="btn btn-outline-primary w-100" href="#door/1">Door Number 1</a>
					</div>
					<div class="col-12 col-md-6">
					<a class="btn btn-outline-primary w-100" href="#door/2">Door Number 2</a>
					</div>
				</div>
			`
			});
	}
}

function door() {
    switch (mi5.router.PageRouter.params.get('id')) {
        case '1':
            return mi5.html.div('Lady', { classList: 'text-center alert alert-success' });
        case '2':
            return mi5.html.div('Tiger', { classList: 'text-center alert alert-warning' });
        default:
            return mi5.html.div('INVALID DOOR', { classList: 'text-center alert alert-dark' })
    }
}

const doorThree = mi5.html.div(`
	<p class="h3">Munchkin Detected</p>
	There is no door number 3. What, do you think this is some kind of Monty Haul campaign?
`);

// Very simple login guard (implements IRouteGuard)
const loginGuard = {
	checkValid: function(route) {
		const loggedIn = sessionStorage.getItem('userName');
		if (loggedIn) {
			return true;
		}
		mi5.router.PageRouter.route('login');
		return false;
	}
};

const kw = mi5.util.kw;

mi5.router.PageRouter.configure([
	{ route: 'login', payload: LoginView },
	{ route: 'home', payload: ChoiceView, routeGuards: loginGuard },
	{ route: 'door/3', payload: doorThree, routeGuards: loginGuard },
	{ route: 'door/:id', payload: door, routeGuards: loginGuard },
], kw('defaultRoute', 'login'));
