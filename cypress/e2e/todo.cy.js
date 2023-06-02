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

	// it('can check a task as completed', () => {
	// 	cy.contains('Task 1').parent().find('input[type=checkbox]').check();

	// 	cy.contains('Task 1').invoke('attr', 'class').should('contain', 'completed');
	// 	cy.contains('All tasks completed').should('be.visible');
	// });

	// it('can uncheck a task', () => {
	// 	cy.contains('Task 2').parent().find('input[type=checkbox]').uncheck();

	// 	cy.contains('Task 2').invoke('attr', 'class').should('not.contain', 'completed');
	// });

	// it('can delete a task', () => {
	// 	cy.contains('Task 1').parent().find('[data-testid=ClearIcon]').click();

	// 	cy.get('[data-testid=task]').should('have.length', 1);
	// });

	// it('can filter for active tasks', () => {
	// 	cy.contains('Active').click();

	// 	cy.get('[data-testid=task]').should('have.length', 1);
	// });

	// it('can filter for completed tasks', () => {
	// 	cy.contains('Completed').click();

	// 	cy.get('[data-testid=task]').should('have.length', 1);
	// });

	// it('can clear completed tasks', () => {
	// 	cy.contains('Clear Completed').click();

	// 	cy.get('[data-testid=task]').should('have.length', 1);
	// });
});