import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent specs', () => {
  it('should be displaed Eliminar Empleado as a title when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Empleado',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <div>test</div>
      </ConfirmationDialogComponent>
    );
    const dialogElement = screen.getByRole('dialog');
    const dialogTitleElement = screen.getByText(props.title);
    const dialogContentElement = screen.getByText('test');
    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });
    const aceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(dialogElement).toBeInTheDocument();
    expect(dialogTitleElement).toBeInTheDocument();
    expect(dialogContentElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
    expect(aceptButtonElement).toBeInTheDocument();
  });
  it('should not be displayed Eliminar Empleado as a title when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Empleado',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <div>test</div>
      </ConfirmationDialogComponent>
    );
    const dialogElement = screen.queryByRole('dialog');
    const dialogTitleElement = screen.queryByText(props.title);
    const dialogContentElement = screen.queryByText('test');
    const closeButtonElement = screen.queryByRole('button', {
      name: props.labels.closeButton,
    });
    const aceptButtonElement = screen.queryByRole('button', {
      name: props.labels.acceptButton,
    });

    // Assert
    expect(dialogElement).toEqual(null);
    expect(dialogTitleElement).toEqual(null);
    expect(dialogContentElement).toEqual(null);
    expect(closeButtonElement).toEqual(null);
    expect(aceptButtonElement).toEqual(null);
  });

  it('Should call onClose when Cancel button is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Empleado',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <div>test</div>
      </ConfirmationDialogComponent>
    );
    const closeButtonElement = screen.getByRole('button', {
      name: props.labels.closeButton,
    });

    expect(props.onClose).toHaveBeenCalledTimes(0);

    userEvent.click(closeButtonElement);

    //arrange
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('Should call onAccept when Aceptar button is clicked', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Empleado',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };
    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <div>test</div>
      </ConfirmationDialogComponent>
    );
    const aceptButtonElement = screen.getByRole('button', {
      name: props.labels.acceptButton,
    });

    expect(props.onAccept).toHaveBeenCalledTimes(0);

    userEvent.click(aceptButtonElement);

    //arrange
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onAccept).toHaveBeenCalledTimes(1);
  });
});
