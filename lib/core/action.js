import inquirer from "inquirer"
import {config} from "../../config.js"

export function myAction(project, args) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'framwork',
            choices: config.framwork,
            message: '请选择框架'
        }
    ]).then(answer => {
        console.log(answer)
    }).catch(err => {
        console.log(err)
    })
}