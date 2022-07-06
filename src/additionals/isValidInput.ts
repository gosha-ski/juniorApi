export function isEmail(email:string){
	let value = /^(\w{1,30})@(mail|gmail)\.(com|ru)$/.test(email)
	return value
}

export function isName(name:string){
	let value = /^([A-Z])[a-z]{1,10}$/.test(name)
	return value
}

export function isValidPassword(password:string){
	let first = /[A-Z]+/.test(password)
	let second = /[a-z]+/.test(password)
	let third = /[0-9]+/.test(password)
	let length = (password.length)>=5
	let space = /\s/.test(password)
	if(first && second && third && length){
		if(!space){
			return true
		}
		return false
	}
	return false
}
