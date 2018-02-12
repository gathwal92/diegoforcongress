import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
var NumberFormat = require('react-number-format');
import './donateForm.scss';

export default class DonateForm extends React.Component<any,any> {
    
    private stripe: any
    private card: any
    
    constructor(props: any) {
        super(props);
        this.state = { 
            cardholderFirstName: "",
            cardholderMiddleName: "",
            cardholderLastName: "",
            email: "",
            addressLineOne: "",
            addressLineTwo: "",
            city: "",
            state: "",
            zipCode: "",
            phone: "",
            occupation: "",
            employer: "",
            chargeAmount: "",
            donationSuccess: false
        };
        this.stripe = Stripe('pk_live_Zueqngy2143hvfGytz0PJEMq');
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }
    
    componentDidMount() {
        let cardElementArgs = {
            iconStyle: 'solid',
            style: {
                base: {
                    iconColor: '#8898AA',
                    color: '#000',
                    lineHeight: '36px',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '19px',
                    
                    '::placeholder': {
                        color: '#8898AA',
                    },
                },
                invalid: {
                    iconColor: '#e85746',
                    color: '#e85746',
                }
            },
            classes: {
                focus: 'is-focused',
                empty: 'is-empty',
            }
        };
        
        let elements = this.stripe.elements();
        this.card = elements.create('card', cardElementArgs);
        this.card.mount('#card-element');
        this.card.on('change', (event) => {
            this.setOutcome(event);
        });
    }
    
    handleChange(e) {
        
        if (e.target.name == "phone") {
            const re = /^[-0-9x.+()\b ]+$/;
            if (e.target.value != '' && !re.test(e.target.value)) {
                return; // test failed
            }
        } else if (e.target.name == "chargeAmount") {
            const re = /^[0-9,.\b]+$/;
            if (e.target.value != '' && !re.test(e.target.value)) {
                return; // test failed
            }
        }
        
        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    handleOnFocus(e) {
        e.target.classList.add('is-focused');
    }
    
    handleOnBlur(e) {
        e.target.classList.remove('is-focused');
    }
    
    handleOnKeyUp(e) {
        if (e.target.value.length === 0) {
            e.target.classList.add('is-empty');
        } else {
            e.target.classList.remove('is-empty');
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.stripe.createToken(this.card).then((result) => {
            
            this.setOutcome(result);
            let token = result.token;
            
            axios.post('/api/charge', {
                token: token.id,
                cardholderFirstName: this.state.cardholderFirstName,
                cardholderMiddleName: this.state.cardholderMiddleName,
                cardholderLastName: this.state.cardholderLastName,
                email: this.state.email,
                addressLineOne: this.state.addressLineOne,
                addressLineTwo: this.state.addressLineTwo,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zipCode,
                phone: this.state.phone,
                occupation: this.state.occupation,
                employer: this.state.employer,
                chargeAmount: this.state.chargeAmount
            })
            .then((response) => {
                this.setState({
                    donationSuccess: true
                });
            })
            .catch((error) => {
                this.setOutcome(error.response.data);
            });
        });
    }
    
    setOutcome(result) {
        var successElement = document.querySelector('.success');
        var errorElement = document.querySelector('.error');
        successElement.classList.remove('visible');
        errorElement.classList.remove('visible');
        
        if (result.token) {
            // Use the token to create a charge or a customer
            // https://stripe.com/docs/charges
            successElement.querySelector('.token').textContent = result.token.id;
            successElement.classList.add('visible');
        } else if (result.error) {
            errorElement.textContent = result.error.message;
            errorElement.classList.add('visible');
        } else if (result.message && result.statusCode == 400) {
            console.log('ERROR', result.message);
            errorElement.textContent = result.message;
            errorElement.classList.add('visible');
        }
    }
    
    render() {
        return (
            <div>

            { !this.state.donationSuccess ?
                <form method="post" id="payment-form" onSubmit={this.handleSubmit}>
                    <label>
                        <input name="cardholderFirstName" className="field is-empty" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>First Name</span></span>
                    </label>
                    <label>
                        <input name="cardholderMiddleName" className="field is-empty" onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Middle Name</span></span>
                    </label>
                    <label>
                        <input name="cardholderLastName" className="field is-empty" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Last Name</span></span>
                    </label>
                    <label>
                        <input name="email" className="field is-empty" placeholder="example@gmail.com" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Email</span></span>
                    </label>
                    <label>
                        <input name="addressLineOne" className="field is-empty" placeholder="123 example Ave" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Address Line 1</span></span>
                    </label>
                    <label>
                        <input name="addressLineTwo" className="field is-empty" placeholder="Apt #" onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Address Line 2</span></span>
                    </label>
                    <label>
                        <input name="city" className="field is-empty" placeholder="" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>City</span></span>
                    </label>
                    <label>
                        <input name="state" className="field is-empty" placeholder="" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>State</span></span>
                    </label>
                    <label>
                        <input name="zipCode" className="field is-empty" placeholder="12345" pattern="[0-9]{5}" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Zip Code</span></span>
                    </label>
                    <label>
                        <NumberFormat format="(###) ###-####" name="phone" className="field is-empty" placeholder="(123) 456-7890" type="tel" required value={this.state.phone} onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Phone</span></span>
                    </label>
                    <label>
                        <input name="occupation" className="field is-empty" placeholder="" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Occupation</span></span>
                    </label>
                    <label>
                        <input name="employer" className="field is-empty" placeholder="" required onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Employer</span></span>
                    </label>
                    <label>
                        <NumberFormat thousandSeparator={true} name="chargeAmount" className="field is-empty inline-field" placeholder="0" value={this.state.chargeAmount} onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Amount</span></span>
                        <span className="input-addon">$</span>
                    </label>
                    <label>
                        <div id="card-element" className="field is-empty"></div>
                        <span><span>Card</span></span>
                    </label>

                    <button type="submit">Donate</button>
                    
                    <div className="outcome">
                        <div className="error" role="alert"></div>
                        <div className="success">
                            Success! Your Stripe token is <span className="token"></span>
                        </div>
                    </div>
                    
                    <div className="agreement">
                        <p> 
                            By clicking “Donate”, you verify the following statements are true and accurate. 
                            1) I am a United States citizen or an individual lawfully admitted with permanent residence status (e.g., a “green card holder”); 
                            2) this contribution is made from my own personal funds and is not made from the federal treasury funds of a corporation, labor organization, or national bank; 
                            3) I am not a federal government contractor; and 
                            4) this contribution is made on a personal credit card and not a corporate credit card or the credit card of another person.  
                            <br /><br />
                            Contributions to Diego For Congress, Inc. are not tax deductible as charitable contributions for federal income tax purposes. Federal law requires us to use our 
                            best efforts to obtain and report the name, mailing address, occupation and employer of each individual whose contribution(s) aggregate in excess of $200 in an election cycle. 
                            Individuals may contribute a maximum of $5,400 per election cycle - $2,700 for the primary election and $2,700 for the general election. 
                            Multi-candidate PACs may give a maximum of $10,000 - $5,000 for the primary election and $5,000 for the general election. 
                            Partnership and LLC contributions may be accepted under certain guidelines. Contributions from corporations, labor unions, federal-government contractors, national banks, and foreign nationals without permanent residency status are prohibited. 
                            Please click the “contact us” button for further information. 
                        </p>
                    </div>
                </form>
                
            :
                <div className="donation-success">
                    Thank you for your donation {this.state.cardholderFirstName}!
                </div>
            }

            </div>
        )
    }
}
