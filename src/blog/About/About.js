import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1em' }}>
        <h1>About Us</h1>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.SnqENcXdG5ZYiCrUGwQHowHaHa&pid=Api&P=0&h=180"  // Replace with your image URL
          alt="Company Logo"
          style={{ maxWidth: '100%', maxHeight: '200px', marginRight: '20px', borderRadius: '8px' }}
        />

        <div style={{ maxWidth: '600px' }}>
          <p>Rajasthan (Hindi: [rɑdʒəsˈtʰɑːn] ⓘ; lit. 'Land of Kings')[12] is a state in northern India.[13][14][15] It covers 342,239 square kilometres (132,139 sq mi) or 10.4 per cent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population. It is on India's northwestern side, where it comprises most of the wide and inhospitable Thar Desert (also known as the Great Indian Desert) and shares a border with the Pakistani provinces of Punjab to the northwest and Sindh to the west, along the Sutlej-Indus River valley. It is bordered by five other Indian states: Punjab to the north; Haryana and Uttar Pradesh to the northeast; Madhya Pradesh to the southeast; and Gujarat to the southwest. Its geographical location is 23°.3' to 30°.12' North latitude and 69°.30' to 78°.17' East longitude, with the Tropic of Cancer passing through its southernmost tip.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
