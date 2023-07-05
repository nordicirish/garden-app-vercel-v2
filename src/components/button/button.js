
export default function Button({children}){
    return(
        <button className="
        
                w-full 
                text-white bg-[#B58D63] hover:bg-[#CCA070] focus:ring-4 focus:ring-stone-200 font-medium rounded text-sm px-4 py-3 mr-2 mb-2
                " type="submit">
                 { children }
                </button>
    )
} 