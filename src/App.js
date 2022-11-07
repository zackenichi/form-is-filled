import { Grid, Container, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import AnswerField from './AnswerField';
import './App.css';
import FormSubmitted from './FormSubmitted';
import debounce from 'lodash.debounce';

const App = () => {
  const [form, setForm] = useState([]);

  const [formComplete, setFormComplete] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setForm([
        { question: 'Full name', answer: '' },
        { question: 'Occupation', answer: '' },
        { question: 'Country', answer: '' },
        { question: 'Age', answer: '' },
      ]);
    }

    return () => {
      mounted = false;
      setForm([]);
    };
  }, []);

  // checks if input is space
  const onlySpace = (txt) => {
    return txt.trim().length === 0;
  };

  const handleTaskInput = (event, index) => {
    // test - this should update the value at the target's index
    // console.log(event.target.value);
    // console.log(index);

    // edit -- added debounced

    const inputTxt = event.target.value;

    const formCopy = [...form];

    formCopy[index].answer = inputTxt;

    setForm(formCopy);

    // check for empty element

    const incomplete =
      formCopy.filter((ques) => {
        return (
          ques.answer === '' || ques.answer === null || onlySpace(ques.answer)
        );
      }).length > 0;

    if (incomplete) {
      setFormComplete(false);
    } else {
      setFormComplete(true);
    }
  };

  const debouncedInput = debounce(handleTaskInput, 300);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormComplete(false);
    setSubmitted(false);
    setForm([
      { question: 'Full name', answer: '' },
      { question: 'Occupation', answer: '' },
      { question: 'Country', answer: '' },
      { question: 'Age', answer: '' },
    ]);
  };

  return (
    <div className="App">
      <div id="form-header">
        <h1>Form validation</h1>
        <p>
          {submitted
            ? 'This simulates a thank you page. '
            : 'This checks if all forms are filled and are not filled with spaces'}
        </p>
        <p>{!formComplete && 'Please fill out all the questions'}</p>
      </div>

      <Container maxWidth="sm">
        {submitted ? (
          <FormSubmitted form={form} handleReset={handleReset} />
        ) : (
          <Grid container spacing={2}>
            {form.map((question, index) => {
              return (
                <Grid item xs={12} key={`$question-${(index + 1).toString()}`}>
                  <AnswerField
                    question={question}
                    index={index}
                    handleTaskInput={debouncedInput}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12} textAlign="right">
              <Button
                disabled={!formComplete}
                variant="contained"
                onClick={handleSubmit}
              >
                {formComplete ? 'Submit' : 'Incomplete'}
              </Button>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default App;
