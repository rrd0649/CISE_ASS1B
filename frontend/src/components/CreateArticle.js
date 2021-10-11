import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      authors:'',
      published_year:'',
      source:'',
      SE_method: '',
      claims:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      authors: this.state.authors,
      published_year: this.state.published_year,
      source: this.state.source,
      doi: this.state.doi,
      SE_method: this.state.SE_method,
      evidence: this.state.evidence,
      claims: this.state.claims
    };

    axios
      .post('http://localhost:5000/api/articles', data)
      .then(res => {
        this.setState({
          title: '',
          authors:'',
          published_year:'',
          source:'',
          doi:'',
          SE_method: '',
          evidence: '',
         claims:''
        })
        this.props.history.push('/');
      })
  };

  render() {
    return (
      <div className="CreateArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Create new article
              </p>

              <form noValidate onSubmit={this.onSubmit}>

              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='title'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='authors'
                    name='authors'
                    className='form-control'
                    value={this.state.authors}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    min='1900'
                    max='2021'
                    placeholder='published_year'
                    name='published_year'
                    className='form-control'
                    value={this.state.published_year}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='DOI'
                    name='doi'
                    className='form-control'
                    value={this.state.doi}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='SE Method'
                    name='SE_method'
                    className='form-control'
                    value={this.state.SE_method}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Evidence'
                    name='evidence'
                    className='form-control'
                    value={this.state.evidence}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Claim'
                    name='claims'
                    className='form-control'
                    value={this.state.claims}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticle;