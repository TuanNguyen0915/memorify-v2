import React from 'react'
import Following from "@/components/RightSidebar/Following";
import SuggestedPeople from "@/components/RightSidebar/SuggestedPeople";

const RightSidebar = () => {
  return (
    <div className='flex flex-col gap-10 px-4 sidebar'>
      <Following/>
      <SuggestedPeople/>
    </div>
  )
}
export default RightSidebar
