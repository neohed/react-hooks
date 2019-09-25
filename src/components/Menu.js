import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => <nav id="menu">
    <ul>
        <li><Link to="/mark-i">Mark I</Link> no performance improvements.</li>
        <li><Link to="/mark-ii">Mark II</Link> memo child components.</li>
        <li><Link to="/mark-iii">Mark III</Link> useCallback for event handler.</li>
        <li><Link to="/mark-iv">Mark IV</Link> replace SVG with a canvas in View component.</li>
    </ul>
</nav>;

export default Menu;
