export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Path Example App",
            "formList": [
                {
                    "id": "PersonForm",
                    "title": "Person",
                    "url": "/person",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "CompanyForm",
                    "title": "Company",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "CompanyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "city",
                            "type": "text",
                            "name": "City",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "companyRating",
                            "type": "RadioGroupField",
                            "name": "Rating",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "A-Rating",
                                key: 0
                            }, {
                                type: "radio",
                                name: "B-Rating",
                                key: 1
                            }, {
                                type: "radio",
                                name: "C-Rating",
                                key: 2
                            }, {
                                type: "radio",
                                name: "D-Rating",
                                key: 3
                            }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "InlineTestForm",
                    "title": "Company",
                    "url": "/company",
                    "borderStyle": "None",
                    "headerVisible": false,
                    "footerVisible": false,
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "CompanyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "city",
                            "type": "text",
                            "name": "City",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ProjectForm",
                    "title": "Project",
                    "url": "/project",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "ProjectName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStart",
                            "type": "date",
                            "name": "StartDate",
                            "width": 1
                        },
                        {
                            "id": "evtEnd",
                            "type": "date",
                            "name": "EndDate",
                            "width": 1
                        },
                        {
                            "id": "projectPriority",
                            "type": "RadioGroupField",
                            "name": "Priority",
                            "alignment": "vertical",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Low",
                                key: 0
                            }, {
                                type: "radio",
                                name: "Medium",
                                key: 1
                            }, {
                                type: "radio",
                                name: "High",
                                key: 2
                            }
                            ]
                        },
                        {
                            "id": "projectType",
                            "type": "CheckboxGroupField",
                            "name": "Type",
                            "width": 2,
                            "data": [{
                                name: "Product",
                                key: 'Product'
                            }, {
                                name: "Service",
                                key: 'Service'
                            }
                            ]
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "HobbyForm",
                    "title": "Hobby",
                    "url": "/hobby",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "HobbyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TaskForm",
                    "title": "Task",
                    "url": "/task",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "TaskName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "project",
                            "type": "autocomplete",
                            "name": "Project",
                            "wordSearchEnabled": true,
                            "defaultKey": "projectKey",
                            "form": "ProjectForm",
                            "url": "/project",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStart",
                            "type": "date",
                            "name": "StartDate",
                            "width": 1
                        },
                        {
                            "id": "evtEnd",
                            "type": "date",
                            "name": "EndDate",
                            "width": 1
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddTaskForm",
                    "title": "AddTask",
                    "url": "/person/:personKey/task",
                    "formFieldList": [
                        {
                            "id": "taskKey",
                            "type": "autocomplete",
                            "name": "Task",
                            "wordSearchEnabled": true,
                            "url": "/task",
                            "width": 2,
                            "form": "TaskForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "taskKey"
                        },
                        {
                            "id": "personKey",
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": true,
                            "url": "/person",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "personKey"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "UserForm",
                    "title": "Person",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Contacts",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "contactspage",
                        },
                        {
                            "type": "button",
                            "name": "Companies",
                            "icon": "fa-industry",
                            "color": "lime",
                            "page": "companiespage",
                        },
                        {
                            "type": "button",
                            "name": "Projects",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "projectspage",
                        },
                        {
                            "type": "button",
                            "name": "Hobbies",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "page": "hobbiespage",
                        },
                        {
                            "type": "button",
                            "name": "Tasks",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "page": "taskspage",
                        },
                        {
                            "type": "button",
                            "name": "ElementTest",
                            "icon": "fa-globe",
                            "width": 2,
                            "newRow": true,
                            "color": "asbestos",
                            "page": "elementspage",
                        }
                    ]
                },
                {
                    "id": "contactspage",
                    "name": "Contacts",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewPerson",
                            "width": 2,
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/person",
                            "page": "personpage",
                        },
                    ]
                },
                {
                    "id": "personpage",
                    "name": "Person",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditPerson",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Hobbies",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "page": "personhobbiespage",
                        },
                        {
                            "type": "button",
                            "name": "Tasks",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "page": "persontaskspage",
                        }
                    ]
                },
                {
                    "id": "personhobbiespage",
                    "name": "Hobbies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "HobbyList",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "search": true,
                            "url": "/person/:personKey/hobby"
                        },
                    ]
                },
                {
                    "id": "persontaskspage",
                    "name": "Tasks",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "AddTask",
                            "icon": "fa-tasks",
                            "color": "green",
                            "form": {
                                "form": "AddTaskForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Tasks",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "search": true,
                            "url": "/person/:personKey/task",
                            "form": {
                                "form": "AddTaskForm"
                            }
                        },
                    ]
                },
                {
                    "id": "companiespage",
                    "name": "Companies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewCompany",
                            "width": 2,
                            "icon": "fa-industry",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "CompanyList",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "width": 3,
                            "url": "/company",
                            "page": "companypage"
                        },
                    ]
                },
                {
                    "id": "companypage",
                    "name": "Company",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditCompany",
                            "icon": "fa-industry",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/company/:companyKey/person",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                    ]
                },
                {
                    "id": "projectspage",
                    "name": "Projects",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewProject",
                            "width": 2,
                            "icon": "fa-cubes",
                            "color": "green",
                            "form": {
                                "form": "ProjectForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ProjectList",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "search": true,
                            "url": "/project",
                            "form": {
                                "form": "ProjectForm"
                            }
                        },
                    ]
                },
                {
                    "id": "hobbiespage",
                    "name": "Hobbies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewHobby",
                            "width": 2,
                            "icon": "fa-bicycle",
                            "color": "green",
                            "form": {
                                "form": "HobbyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "HobbyList",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "search": true,
                            "url": "/hobby",
                            "form": {
                                "form": "HobbyForm"
                            }
                        },
                    ]
                },
                {
                    "id": "taskspage",
                    "name": "Tasks",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewTask",
                            "width": 2,
                            "icon": "fa-tasks",
                            "color": "green",
                            "form": {
                                "form": "TaskForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "TaskList",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "search": true,
                            "width": 2,
                            "url": "/task",
                            "limit" : 100,
                            "page": "taskpage"
                        },
                    ]
                },
                {
                    "id": "taskpage",
                    "name": "Task",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditTask",
                            "icon": "fa-tasks",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "TaskForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/task/:taskKey/person",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                    ]
                },
                {
                    "id": "elementspage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "Several <b>example</b> Path GUI Elements.",
                        },
                        {
                            "type": "backbutton",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "CustomComponents",
                            "width": 2,
                            "icon": "fa-download",
                            "color": "green",
                            "tooltip": "CustomComponentTooltip",
                            "page": "customComponentsPage",
                        },
                        {
                            "type": "button",
                            "name": "DynamicComponents",
                            "width": 2,
                            "icon": "fa-recycle",
                            "color": "purple",
                            "tooltip": "DynamicComponentTooltip",
                            "page": "dynamicComponentsPage",
                        },
                        {
                            "type": "button",
                            "name": "InlineForm",
                            "width": 2,
                            "icon": "fa-forward",
                            "color": "blue",
                            "page": "inlineFormPage",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 1,
                            "icon": "fa-text-width",
                            "color": "lime",
                            "page": "buttonWidthPage",
                        },
                        {
                            "type": "linkButton",
                            "name": "www.google.com",
                            "width": 2,
                            "icon": "fa-google",
                            "color": "amethyst",
                            "url": "http://www.google.com"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete",
                            "icon": "fa-user",
                            "color": "red"
                        },
                        {
                            "type": "list",
                            "name": "LinkList",
                            "icon": "fa-link",
                            "color": "teal",
                            "search": false,
                            "url": "/company/link"
                        },
                    ]
                },
                {
                    "id": "inlineFormPage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "inlineForm",
                            "form": "InlineTestForm",
                            "url": "/company"
                        },
                        {
                            "type": "list",
                            "name": "LinkList",
                            "icon": "fa-link",
                            "color": "teal",
                            "search": false,
                            "url": "/company/link"
                        },
                        {
                            "type": "inlineForm",
                            "form": "CompanyForm",
                            "url": "/company"
                        },
                        {
                            "type": "list",
                            "name": "LinkList",
                            "icon": "fa-link",
                            "color": "teal",
                            "search": false,
                            "url": "/company/link"
                        },
                    ]
                },
                {
                    "id": "customComponentsPage",
                    "name": "Custom Components",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "ExampleComponent",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "dynamicComponentsPage",
                    "name": "Dynamic Components",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "elementList",
                            "url": "/dynamicComponentsPage",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "dynamicComponentsChildPage",
                    "name": "Dynamic Components",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "elementList",
                            "url": "/dynamicComponentsPage/:buttonKey",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "buttonWidthPage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 1,
                            "icon": "fa-text-width",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 2,
                            "icon": "fa-text-width",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 3,
                            "icon": "fa-text-width",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 4,
                            "icon": "fa-text-width",
                            "color": "lime",
                        }
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}