export function checkFormat(array: Buffer, type: string){
	const png = [137, 80, 78, 71, 13, 10, 26, 10]
	const jpg = [ 255, 216, 255 ]
	if(type == "png"){
		
		for(let i=0; i<=7; i++){
	
			if(png[i]!=array[i]){
				return false
			}
		}
		return true
	}

	else if(type == "jpeg" || type == "jpg"){
		
		for(let i=0; i<=2; i++){
			
			if(jpg[i]!=array[i]){
				return false
			}
		}
		return true
	}
	else{
		return false
	}

}