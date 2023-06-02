describe('todo application', () => {
	beforeEach(() => {
		const tasks = [];

		localStorage.setItem('todoList', JSON.stringify(tasks));
		cy.visit('http://localhost:3000/');
	});

	afterEach(() => {
		localStorage.clear();
	});

	it('displays input for adding new task', () => {
		cy.get('input[type=text]').should('be.visible');
	});

	it('doesnt display any tasks default', () => {
		cy.get('[data-testid=task]').should('have.length', 0);
	});

	it('create new todo succesfully', () => {
		cy.get('input[type=text]').type('Wash dishes').type('{enter}');

		cy.contains('1 items left').should('be.visible');
	});
});