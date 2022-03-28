import { DonutLarge, DonutLargeSharp } from '@mui/icons-material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
const Sidebar = () => {
  return (
    <div className='w-96 shadow-md'>
        <div className='border flex justify-around'>
            <p className='text-lg font-semibold'>Pages</p>
            <p className='text-gray-400 text-lg'>wallet</p>
        </div>
        <div className='p-4 space-y-4'>
            <div className='space-y-2'>
                <h1 className='text-gray-500' >Menu</h1>
            </div>
            <div>
                <div className='flex space-x-4'>
                    <DashboardIcon className='test-gray-300'/>
                    <p className='"text-gray-600'>dashboard</p>

                </div>
                <div className='flex space-x-4'>
                    <DonutLarge className='test-gray-300'/>
                    <p className='"text-gray-600'>Pages</p>

                </div>
                <div className='flex space-x-4'>
                    <CalendarTodayOutlinedIcon className='test-gray-300'/>
                    <p className='"text-gray-600'>Projects</p>

                </div>
            </div>
            <div>4</div>
        </div>
      
    </div>
  )
}

export default Sidebar

