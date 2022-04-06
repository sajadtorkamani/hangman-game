import React from 'react'

const ScreenContainer: React.FC = ({ children }) => (
  <div className="border border-gray-400 max-w-xl mx-auto my-8 text-center">
    <div className="px-4 py-5">{children}</div>
  </div>
)

export default ScreenContainer
