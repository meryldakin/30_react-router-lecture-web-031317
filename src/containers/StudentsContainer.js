import React, { Component } from 'react'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'
import StudentDetail from '../components/StudentDetail'

import { Switch, Route } from 'react-router-dom'

import { fetchStudents, createStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      names: []
    }
  }

  componentDidMount(){
    fetchStudents()
      .then( data => this.setState({
        names: data.map(student => student.name )
      }) )
  }

  handleAddStudent(name){
    this.setState( prevState =>  ({ names: [...prevState.names, name] }) )
    createStudent(name)
      .catch(e => this.setState(prevState => ({names: prevState.names.filter(person => person !== name)})))
  }

  render(){
    return (
      <div>
        < StudentList students={this.state.names} />
        <Switch>
          < Route exact path="/students/new" component={StudentForm} />
          < Route exact path="/students/5" component={StudentDetail} />
        </Switch>

      </div>
    )
  }
}

export default StudentsContainer

//< StudentForm  onSubmit={ this.handleAddStudent.bind(this) }/>
