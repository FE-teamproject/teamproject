import React from 'react';

function MainTab() {
  const gnb_div = {
    borderTop: '1px solid #6b6b6b',
    borderBottom: '1px solid #6b6b6b',
  };
  const gnb_nav = {
    justifyContent: 'space-between',
  };
  const gnb_text = {
    color: '#000',
  };
  return (
    <div style={gnb_div}>
      <nav class="nav" style={gnb_nav}>
        <a class="nav-link active" style={gnb_text}>
          최신경매
        </a>
        <a class="nav-link" style={gnb_text}>
          인기경매
        </a>
        <a class="nav-link" style={gnb_text}>
          마감임박
        </a>
      </nav>
    </div>
  );
}

export default MainTab;
