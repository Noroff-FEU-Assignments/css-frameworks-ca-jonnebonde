import React from 'react';
import Table from 'react-bootstrap/Table';


function ContactDetails() {
  return (
    <Table size="sm">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td><i class="fa-solid fa-envelope"></i></td>
          <td>hello@yay.com</td>
        </tr>
        <tr>
          <td><i class="fa-solid fa-phone-flip"></i></td>
          <td>123 456 7890</td>
        </tr>
        <tr>
          <td><i class="fa-solid fa-location-dot"></i></td>
          <td><ul>
            <li>123 Some Street</li>
            <li>Somewhere</li>
            <li>Some City</li>
            <li>10000</li>
          </ul></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ContactDetails

{/* <ul>
<li>123 Some Street</li>
<li>Somewhere</li>
<li>Some City</li>
<li>10000</li>
</ul> */}