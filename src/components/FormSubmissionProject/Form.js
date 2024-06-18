import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        lang: [],
        file: '',
        url: '',
        select: '',
        about: ''
    });

    const [arr, setArr] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        setArr((prevArr) => [...prevArr, form]);
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: '',
            lang: [],
            file: '',
            url: '',
            select: '',
            about: ''
        });
    }

    function handleReset() {
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: '',
            lang: [],
            file: '',
            url: '',
            select: '',
            about: ''
        });
    }

    function handleLangChange(e) {
        const { value, checked } = e.target;
        const { lang } = form;

        if (checked) {
            setForm({
                ...form,
                lang: [...lang, value]
            });
        } else {
            setForm({
                ...form,
                lang: lang.filter((lang) => lang !== value)
            });
        }
    }

    return (
        <div>
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label>FirstName*</label>
                    <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder='Enter First Name'
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        required
                    />

                    <label>LastName*</label>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder='Enter Last Name'
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        required
                    />

                    <label>Email*</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter email'
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <label>Phone Number*</label>
                    <input
                        type='tel'
                        name='phoneNumber'
                        id='phoneNumber'
                        placeholder='Enter Phone Number'
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        required
                    />

                    <label>Gender*</label>
                    <input
                        type='radio'
                        name='gender'
                        id='male'
                        value='male'
                        checked={form.gender === 'male'}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}
                        required
                    />
                    Male
                    <input
                        type='radio'
                        name='gender'
                        id='female'
                        value='female'
                        checked={form.gender === 'female'}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}
                        required
                    />
                    Female

                    <label>Your Best Subject*</label>
                    <input
                        type='checkbox'
                        name='lang'
                        id='english'
                        value='english'
                        checked={form.lang.includes('english')}
                        onChange={handleLangChange}
                    />
                    English
                    <input
                        type='checkbox'
                        name='lang'
                        id='maths'
                        value='maths'
                        checked={form.lang.includes('maths')}
                        onChange={handleLangChange}
                    />
                    Maths
                    <input
                        type='checkbox'
                        name='lang'
                        id='physics'
                        value='physics'
                        checked={form.lang.includes('physics')}
                        onChange={handleLangChange}
                    />
                    Physics

                    <label>Upload Resume*</label>
                    <input
                        type='file'
                        name='file'
                        id='file'
                        placeholder='Upload file'
                        value={form.file}
                        onChange={(e) => setForm({ ...form, file: e.target.value })}
                        required
                    />

                    <label>Enter Url*</label>
                    <input
                        type='url'
                        name='url'
                        id='url'
                        placeholder='Enter URL'
                        value={form.url}
                        onChange={(e) => setForm({ ...form, url: e.target.value })}
                        required
                    />

                    <label>Select your choice</label>
                    <select
                        name='select'
                        id='select'
                        value={form.select}
                        onChange={(e) => setForm({ ...form, select: e.target.value })}
                    >
                        <option value='' disabled>
                            Select Your Ans
                        </option>
                        <optgroup label='Beginners'>
                            <option value='HTML'>HTML</option>
                            <option value='CSS'>CSS</option>
                            <option value='JavaScript'>JavaScript</option>
                        </optgroup>
                        <optgroup label='Advance'>
                            <option value='React'>React</option>
                            <option value='Node'>Node</option>
                            <option value='Express'>Express</option>
                            <option value='MongoDB'>MongoDB</option>
                        </optgroup>
                    </select>

                    <label>About</label>
                    <textarea
                        name='about'
                        id='about'
                        cols='30'
                        rows='10'
                        placeholder='About Yourself'
                        value={form.about}
                        onChange={(e) => setForm({ ...form, about: e.target.value })}
                        required
                    ></textarea>

                    <button type='reset' onClick={handleReset}>
                        Reset
                    </button>
                    <button type='submit'>Submit</button>
                </form>
            </fieldset>
            <table rules='all' border='1'>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Gender</th>
                        <th>Language</th>
                        <th>File</th>
                        <th>Url</th>
                        <th>Technology</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((element, index) => (
                        <tr key={index}>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.email}</td>
                            <td>{element.phoneNumber}</td>
                            <td>{element.gender}</td>
                            <td>{element.lang.join(', ')}</td>
                            <td>{element.file}</td>
                            <td>{element.url}</td>
                            <td>{element.select}</td>
                            <td>{element.about}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Form;