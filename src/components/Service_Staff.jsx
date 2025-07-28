import React from 'react'
import Name from './Name'
import Footer from './Footer'

const Service_Staff = () => {
  return (
    <div>
      <Name />
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 text-gray-600 leading-6 sm:leading-7 md:leading-8'>
        <p className='text-sm sm:text-base mb-4 sm:mb-6'>
          Manpower is the important issues for every companies and the maximum time & cost is waste in hiring & firing of employees. So companies required more focus in their core business but they are engage in manpower. Fusion Tech Multi-Services is the leading manpower outsourcing and staffing company in India. We have a experienced recruiter and operation team.
        </p>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6'>
          Why should one Outsource Payroll?
        </h2>
        <p className='text-sm sm:text-base mb-4 sm:mb-6'>
          There are several benefits of outsourcing your payroll
        </p>
        <ul className='list-none space-y-4 sm:space-y-6'>
          <li>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>Reduce Costs</h3>
            <p className='text-sm sm:text-base'>
              The direct costs of processing payroll can be greatly reduced by working with a payroll provider. As per a new report Tata Steel cut its payroll processing cost by 20%. Cost saved include direct cost of employee working on Payroll, software cost, software AMC etc.
            </p>
          </li>
          <li>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>Avoid Penalties</h3>
            <p className='text-sm sm:text-base'>
              Payroll processing involves legal compliance for TDS, PF, ESIC and P Tax. Incorrect calculations and delayed payments result in interest and penalties. In many instances, this cost immediately justifies outsourcing payroll.
            </p>
          </li>
          <li>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>Reliability and Continuity</h3>
            <p className='text-sm sm:text-base'>
              You do not have to worry about losing the employee that does payroll processing and this is a great challenge faced by organizations in today’s time of high staff attrition. Outsourcing ensures reliability and continuity.
            </p>
          </li>
          <li>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>Free Up Time for Core Activities</h3>
            <p className='text-sm sm:text-base'>
              Payroll processing is a time-consuming process. Outsourcing payroll can free up staff time to pursue more important value-added and revenue-generating activities.
            </p>
          </li>
          <li>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>Leverage Outside Payroll Expertise</h3>
            <p className='text-sm sm:text-base'>
              Most business Accounts /HR Managers don’t have time to keep up with constantly changing regulations, TDS rates, and legal forms. By outsourcing payroll, business can take advantage of expertise of outsourcing firm.
            </p>
          </li>
          <li>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>Automation of the Payroll Process</h3>
            <p className='text-sm sm:text-base'>
              Because of outsourcing, the payroll process gets streamlined and to a maximum extent gets automated. The software used for payroll processing sends several standard reports to employees, accounts and the HR department, which forms a good basis of control as well.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Service_Staff