import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

class WTF extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formData };
  }

  onChange(name) {
    return (event) => {
      this.setState(
        {
          [name]: event.target.value
        },
        () => this.props.onChange(this.state)
      );
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>Input value and press enter key to submit</div>
        <div>
          <input type="text" value={value} onChange={this.onChange('value')} />
        </div>
        <div>
          <button tabIndex="-1" onClick={() => console.log('SHIT!! somehow its been called')}>
            SHIT!!
          </button>
        </div>
        <div>
          <button tabIndex="-1" onClick={() => console.log('Does not called')}>
            Does not called
          </button>
        </div>
        <div>
          <button tabIndex="-1" onClick={() => console.log('Does not called as well')}>
            Does not called as well
          </button>
        </div>
      </div>
    );
  }
}

WTF.propTypes = {
  formData: PropTypes.object,
  onChange: PropTypes.func
};

const schema = {
  type: 'object',
  required: ['value'],
  properties: {
    value: { type: 'string' }
  }
};
const uiSchema = { 'ui:field': 'wtf' };
const fields = { wtf: WTF };

const Home = () => (
  <div>
    <Form
      schema={schema}
      uiSchema={uiSchema}
      fields={fields}
      onSubmit={values => console.log(values)}
    />
  </div>
);

export default Home;
