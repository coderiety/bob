import cx from 'classnames';
import React from 'react';
import styles from './logo.scss';

export default ({className}) =>
  <svg className={cx(styles.root, className)} viewBox='0 0 256 256'>
    <path d='M135.945,79.843l26.003,28.201l-116.295,135.669c-5.057,5.716 -14.086,5.716 -19.504,0l-14.086,-15.244c-5.417,-5.336 -5.417,-14.863 0,-20.579l123.882,-128.047Zm109.075,28.964l-19.503,20.96c-3.973,4.192 -10.115,4.192 -14.447,0l-4.335,-4.954c-3.25,-3.049 -4.695,-8.766 -2.889,-11.433c3.251,-2.287 2.167,-9.147 -3.973,-15.244c-8.668,-9.527 -19.865,-9.909 -24.197,-4.954c-1.806,1.524 -7.585,8.003 -7.585,8.003l-26.727,-27.82l4.334,-4.573c0,0 1.084,-1.144 3.251,-3.811c8.307,-8.766 -0.361,-18.674 -0.361,-18.674c-23.477,-24.39 -56.342,-24.009 -56.342,-24.009l-0.361,-8.765c66.095,-17.912 91.015,12.576 100.044,22.103c8.307,8.765 16.973,17.91 19.142,20.198c4.696,4.954 0,19.055 6.863,27.058c3.25,3.43 7.584,4.954 10.835,4.954c3.612,-3.43 9.391,-2.286 12.28,1.144l3.973,4.573c3.971,4.192 3.971,10.67 -0.002,15.244l0,0Z' />
  </svg>;
