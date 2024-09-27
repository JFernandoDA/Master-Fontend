import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as mockFunction from 'react-promise-tracker/lib/trackerHook';
import Modal from '@material-ui/core/Modal';
import Loader from 'react-spinners/ScaleLoader';
import * as classes from './spinner.styles';

describe('spinner component specs', () => {
  it('should be displayed the spinner while the promise is still unresolved', () => {
    //Arrange
    const getStub = jest
      .spyOn(mockFunction, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));
    //Act
    render(<SpinnerComponent />);

    const modalElement = screen.getByRole('status');
    //Assert
    expect(modalElement).toBeInTheDocument();
  });

  it('should be displayed the spinner while the promise is still unresolved', () => {
    //Arrange

    //Act
    render(<SpinnerComponent />);

    const modalElement = screen.queryByRole('status');
    //Assert
    expect(modalElement).toEqual(null);
  });

  it('should be displayed the spinner while the promise is still unresolved', () => {
    //Arrange
    jest
      .spyOn(mockFunction, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: true }));

    jest
      .spyOn(mockFunction, 'usePromiseTracker')
      .mockImplementation(() => ({ promiseInProgress: false }));
    //Act
    render(<SpinnerComponent />);

    const modalElement = screen.queryByRole('status');
    //Assert
    expect(modalElement).toEqual(null);
  });
});
