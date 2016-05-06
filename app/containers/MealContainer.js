import React, { Component, cloneElement } from 'react'
import { browserHistory } from 'react-router';
import MealLayout from '../layouts/MealLayout'

export default class MealContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mealList: [
				{
					type: 'carne',
					item: "Batata com carne"
				},
				{
					type: 'salada',
					item: "Alface / Cenoura / Tomate"
				},
				{
					type: 'sobremesa',
					item: "Pudim de chocolate"
				},
				{
					type: 'guarnicao',
					item: "Sopa de Inhame"
				}
			],
			date: '2016-12-06',
			type: 'almoco',
			stars: 5,
			meat: true
		}
	}

	componentDidMount() {
    //Emulando um Ajax para nossa futura API
  }


	render() {
		// console.log("MealContainer", this.props);
		return	(
			<MealLayout {...this.state} {...this.props} />
		)
	}

}
