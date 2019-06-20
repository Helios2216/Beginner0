/*Ref: This code is not meant to be excuted || evaluated. Written as is to see linting */
// Component did mount

useEffect(() => {
	functionCall();
}, []) === componentDidMount();

//-----------------------------------------------------------------------------
// componentDidUpdate
useEffect(
	() => {
		functionCall(prop.dependencies || dependencies);
	},
	[dependencies]
) === componentDidUpdate();
/* 
    Example: below
*/

const functionCall = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});
	const { name, email, password, password2 } = formData;
	const changed = event => setFormData({ ...formData, [event.target.name]: event.target.value });

	useEffect(
		() => {
			console.log(formData); // or function w/dependencies
		},
		[formData]
	);
};
//------------------------------------------------------------------------------
// Clean up
useEffect(
	() => {
		// Return for clean up, called before subsequent useEffect calls
		return () => {
			/*
        
        This is where any clean up logic happens.
        */
		};
	},
	[input]
);

//------------------------------------------------------------------------------
// Component will unmount sort of

useEffect(() => {
	return () => {};
}, []) === componentWillUnmount(); // will run after it unmounted.

//----------------------------------------------------------------------------
// Should Component update
React.memo(functionCall) === shouldComponentUpdate;
