import React from 'react'

const Container: React.FC = ({ children }) => (
  <div
    className="bg-white border border-gray-400 rounded-xl max-w-xl mx-auto 
    mt-12 mb-8 text-center px-5 pt-7 pb-12"
  >
    {children}
  </div>
)

export default Container
