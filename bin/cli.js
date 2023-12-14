#! /usr/bin/env node
import {program} from "commander"
import {myAction} from "../lib/core/action.js"
program.command('create <name> [other...]').alias('c').description('创建项目').action((project, args) => {
    myAction(project,args)
})
program.parse(process.argv)