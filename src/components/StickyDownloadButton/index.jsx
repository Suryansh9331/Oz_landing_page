
// function StickyButton({ setIsOpen }) {
//   return (
//     <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
//       <button 
//          onClick={() => setIsOpen(true)}
//         className="bg-orange-500 hover:bg-orange-600 text-white font-bold  transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-x-[-5px] focus:outline-none"
//         style={{ 
//           writingMode: 'vertical-lr', 
//           borderTopLeftRadius: '8px',
//           borderBottomLeftRadius: '8px',
//           textOrientation: 'upright',
//           letterSpacing: '1px',
//           textTransform: 'uppercase'
//         }}
//       >
//         <span className=" py-10 px-10 text-md">DOWNLOAD SYLLABUS</span>
//       </button>
//     </div>
//   );
// }
// export default StickyButton;






// function StickyButton({ setIsOpen }) {
//   return (
//     <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
//       <button 
//          onClick={() => setIsOpen(true)}
//         className="bg-orange-500 hover:bg-orange-600 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-x-[-5px] focus:outline-none flex items-center justify-center"
//         style={{ 
//           borderTopLeftRadius: '8px',
//           borderBottomLeftRadius: '8px',
//           writingMode: 'vertical-l',
//           textOrientation: 'mixed',
//           width: '60px',
//           height: 'auto',
//           minHeight: '180px',
//           padding: '20px 0'
//         }}
//       >
//         <span 
//           className="text-sm font-bold uppercase"
//           style={{
//             letterSpacing: '2px',
//             lineHeight: '1.2'
//           }}
//         >
//           DOWNLOAD SYLLABUS
//         </span>
//       </button>
//     </div>
//   );
// }
// export default StickyButton;




function StickyButton({ setIsOpen }) {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
      <button 
         onClick={() => setIsOpen(true)}
        className={`
          bg-orange-500 hover:bg-orange-600 text-white font-bold 
          transition-all duration-300 shadow-lg hover:shadow-xl 
          transform hover:translate-x-[-5px] focus:outline-none 
          flex items-center justify-center
          
          /* Responsive width */
          w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18
        `}
        style={{ 
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
        }}
      >
        <span 
          className={`
            uppercase font-bold
            
            /* Mobile styles */
            text-xs px-2 py-6
            
            /* Tablet styles */
            sm:text-sm sm:px-3 sm:py-8
            
            /* Desktop styles */
            md:text-sm md:px-4 md:py-10
            
            /* Large desktop styles */
            lg:text-base lg:px-5 lg:py-12
            
            /* Extra large screens */
            xl:text-base xl:px-6 xl:py-14
          `}
          style={{
            letterSpacing: '1px',
            lineHeight: '1.2'
          }}
        >
          DOWNLOAD SYLLABUS
        </span>
      </button>
    </div>
  );
}
export default StickyButton;