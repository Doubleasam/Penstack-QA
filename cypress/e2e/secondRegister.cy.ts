let webAddress = 'http://localhost:5173/';

describe('Verify that user can view all form elements successfully', () => {
  beforeEach(() => {
    cy.visit(webAddress);
  });

  it('should display all form elements', () => {
    cy.get('form').should('exist');
    cy.get('input[name="firstName"]').should('exist');
    cy.get('input[name="lastName"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[type="password"]').should('exist');
    cy.get('input[name="confirm"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should display Google sign-up button', () => {
    cy.get('button[class="chakra-button css-175m4rs"]').contains('Sign up with Google');
  });

  it('should display password visibility toggle', () => {
    cy.get('button > svg[class="chakra-icon css-onkibi"]').should('exist');
  });
});

describe('Verify Form Validation', () => {
  beforeEach(() => {
    cy.visit(webAddress);
    cy.get('button[type="submit"]').click();
  });

  it('should display validation errors on invalid submission', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.chakra-form__error-message').contains('Firs name is required').should('exist');
    cy.get('.chakra-form__error-message').contains('Last name is required').should('exist');
    cy.get('.chakra-form__error-message').contains('Email is required').should('exist');
    cy.get('.chakra-form__error-message').contains('Password is required').should('exist');
    cy.get('.chakra-form__error-message').contains('Password Confirmation is required').should('exist');
  });

  it('should validate email format', () => {
    cy.get('input[name="email"]').type('invalidemail').blur();
    cy.get('.chakra-form__error-message').contains('Must be a valid email address').should('exist');
  });

  it('should validate password strength', () => {
    cy.get('input[type="password"]').first().type('weakpassword').blur();
    cy.contains('Must Contain 8 Characters').should('exist');
    cy.contains('One Uppercase').should('exist');
  
  });

  it('should show matching password error', () => {
    cy.get('input[type="password"]').first().type('strongPassword123');
    cy.get('input[name="confirm"]').type('differentPassword').blur();
    cy.contains('Passwords must match').should('exist');
  });
});

describe('Verify that User Can Create Account Successfully', () => {
  beforeEach(() => {
    cy.visit(webAddress);
  });

  it('should submit the form with valid data', () => {
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[type="password"]').first().type('StrongPass123');
    cy.get('input[name="confirm"]').type('StrongPass123');
    cy.get('button[type="submit"]').click();

    cy.contains('Passwords must match').should('exist');
  
  });

});

describe('Verify That User Can Click On the Login Button', () => {
  beforeEach(() => {
    cy.visit(webAddress);
  });

  it('should submit the form with valid data', () => {
    cy.get('.chakra-link').click();
  });
});