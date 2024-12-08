import React from 'react';
import Title from './create_title';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            createdAt: new Date().toISOString()
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value
          };
        });
      }

      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value
          };
        });
      }

      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }

    render() {

        const remainingTitleChars = 50 - this.state.title.length;

        return (
            <div className='note-input'>
                <Title />
                <form className='note-input__body' onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa karakter: {remainingTitleChars}</p>
                    <input type="text" className='note-input__title' placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={this.state.maxTitleLength}/>
                    <textarea placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Save</button>
                </form>
            </div>
            
        );
    }


};

export default NoteForm;