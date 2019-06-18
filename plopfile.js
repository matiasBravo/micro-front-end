const templateFilesJS = 'plop-templates/js/**';

const jsTemplateActions = [
  {
    type: 'addMany',
    destination: 'packages/{{camelCase name}}',
    base: 'plop-templates/js',
    templateFiles: templateFilesJS,
  },
  {
    type: 'modify',
    path: 'packages/{{camelCase name}}/package.json',
    pattern: /##__PROJECT_NAME_LOWER_CASE__##/gi,
    template: '{{dashCase name}}',
  },
  {
    type: 'modify',
    path: 'packages/{{camelCase name}}/app/index.html',
    pattern: /##__PROJECT_NAME__##/gi,
    template: '{{dashCase name}}',
  },
  {
    type: 'modify',
    path: 'packages/{{camelCase name}}/app/index.js',
    pattern: /##__PROJECT_NAME__##/gi,
    template: '{{dashCase name}}',
  },
  {
    type: 'modify',
    path: 'packages/{{camelCase name}}/index.html',
    pattern: /##__PROJECT_NAME__##/gi,
    template: '{{dashCase name}}',
  },
];

module.exports = plop => {
  // Declare a new generator called "newApp"
  plop.setGenerator('microfrontend', {
    description: 'Scaffold a new React microApp',

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name from your Micro App?',
        validate: value => {
          if (/.+/.test(value)) {
            if (/^[a-zA-Z]+$/.test(value)) {
              return true;
            }
            return 'Name must not have any special characters in it.';
          }
          return 'Name is required!';
        },
      },
      {
        type: 'confirm',
        name: 'isJSTemplate',
        message: 'Would you like to create typescript template?',
      },
    ],

    actions: jsTemplateActions,
  });
};
