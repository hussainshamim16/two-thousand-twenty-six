import React, { useReducer } from 'react'

// useReducer 
//  ye jab use hota jab hamari website mey complex state mangement use ho 
// `jab apki state mey bohot sari cahnges aike sath ho rhi ho tab use karty hen (updates)

// handle form using two ways
// each input ham kia karen aike state
// each input ham kia karen aike state

// life cycle


// 1 state = khali table ( Ye hamari "Single Source of Truth" hey.  )
//           Jaise restaurant mey aik khali table client ka poora data (order) hold karta hey, 
//           waise hi ye object form ki saari current values ko store karta hey.


// 2 action = (Ye aik instruction object hey.) //order dena , khana mangavana , khan khana ,bill pay
//            Ismey do cheezen hoti hain: 
//            1. 'type' (Batata hey ke kis field ko update karna hey, e.g., "name")
//            2. 'val' (Actual data jo user ne type kiya hey).


// 3 reducer = waiter (khana ley kar ata hey apko deta hey) Ye aik pure function hey jo "State" aur "Action" ko leta hey.
//             Ye faisla karta hey ke purani state mey naya data kaise merge karna hey.
//             Ye  state(object) kei aik 'New Copy' return karta hey.


// 4 dispatch = menu card ya witer notebook (Ye wo trigger hey jo Action ko Reducer tak pohanchata hey.)
//              Jab bhi user input mey kuch type karta hey, Dispatch kehta hey: 
//              "Hey Reducer! Ye lo naya data aur table (state) update kar do."


// 5 data = Iska matlab hey "Purani saari keys barkarar rakho Agar aap 'Name' likh rahe hain, toh ye ensure karta hey ke 'Email' ya 'Age' delete na ho jaye..


const emptydata = {
  name: "",
  age: "",
  email: "",
  phone: "",
  city: "Karachi",
  course: "AI & Data Science",
  gender: "",
  address: ""
}

const reducer = (data, action) => {
  // witer 2 cheezen karey ga 
  // sab sey pehly poochey ga kia khana hey 
  // staff ko ye battay ga key client ko cahiye 
  // staff ready kar key dega food
  // then khana la kar dey 

  return { ...data, [action.type]: action.val }
}

const App = () => {
  const [ state, dispatch] = useReducer(reducer, emptydata)
  // console.log(state)

  const submitData = (e) => {
    e.preventDefault(); // Page refresh honey sey bachaey ga
    console.log("Final Submitted Data:", state);
    console.log("Final Submitted Data:", state.name);
    alert(`Shukriya ${state.name}! Form submit ho gaya.`);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className='text-black bg-yellow-500 text-center mb-6 py-2 font-bold text-xl rounded'>
          Saylani Student Registration Form
        </h1>

        <form onSubmit={submitData} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Basic Info */}
          <input 
            type="text" 
            onChange={(e) => dispatch({ val: e.target.value, type: 'name' })} 
            placeholder="Full Name" 
            className='border-2 p-2 rounded focus:outline-none focus:border-yellow-500' 
          />

          <input 
            type="number" 
            onChange={(e) => dispatch({ val: e.target.value, type: 'age' })} 
            placeholder="Age" 
            className='border-2 p-2 rounded focus:outline-none focus:border-yellow-500' 
          />

          <input 
            type="email" 
            onChange={(e) => dispatch({ val: e.target.value, type: 'email' })} 
            placeholder="Email Address" 
            className='border-2 p-2 rounded focus:outline-none focus:border-yellow-500' 
          />

          <input 
            type="text" 
            onChange={(e) => dispatch({ val: e.target.value, type: 'phone' })} 
            placeholder="Phone Number" 
            className='border-2 p-2 rounded focus:outline-none focus:border-yellow-500' 
          />

          {/* Select Options */}
          <select 
            onChange={(e) => dispatch({ val: e.target.value, type: 'city' })}
            className='border-2 p-2 rounded focus:outline-none focus:border-yellow-500'
          >
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
          </select>

          <select 
            onChange={(e) => dispatch({ val: e.target.value, type: 'course' })}
            className='border-2 p-2 rounded focus:outline-none focus:border-yellow-500'
          >
            <option value="AI & Data Science">AI & Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
          </select>

          {/* Gender Radio */}
          <div className="flex gap-4 p-2 border-2 rounded">
            <label>
              <input type="radio" name="gender" value="Male" onChange={(e) => dispatch({ val: e.target.value, type: 'gender' })} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={(e) => dispatch({ val: e.target.value, type: 'gender' })} /> Female
            </label>
          </div>

          {/* Textarea */}
          <textarea 
            placeholder="Full Address"
            onChange={(e) => dispatch({ val: e.target.value, type: 'address' })}
            className='border-2 p-2 rounded md:col-span-2 focus:outline-none focus:border-yellow-500'
          ></textarea>

          <button 
            type="submit"
            className='bg-green-600 text-white p-2 rounded font-bold hover:bg-green-700 md:col-span-2 transition'
          >
            Submit Data
          </button>
        </form>

        {/* Live Preview Section */}
        <div className="mt-8 p-4 bg-gray-50 border-t-4 border-yellow-500">
          <h2 className="font-bold mb-2">Live State Preview:</h2>
          <pre className="text-sm bg-black text-green-400 p-2 rounded overflow-auto">
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>

      </div>
    </div>
  )
}

export default App
