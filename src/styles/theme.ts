import {DefaultTheme} from 'styled-components'

type ThemeProps = {
  colorStyles: {
    blue: string,
    green: string,
    red: string,
    title: string,
    text: string,
    shape: string,
    background: string
  }
}

export const theme: DefaultTheme = {
  colorStyles: {
    blue: '#5429CC',
    green: '#33CC95',
    red: '#E62E4D',
    title: '#363F5F',
    text: '#969CB3',
    shape: '#FFFFFF',
    background: '#F0F2F5'
  }
};


