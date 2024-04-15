import './style.css'
import Model from './model'
import View from './view'
import Controller from './controller'

const app = new Controller(new Model(), new View())

document.addEventListener('DOMContentLoaded', app.render)
