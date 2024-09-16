import { renderHook } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog Hook specs', () => {
  it('should return an object with isOpen equals false, itemToDelete an empty Lookup Objetc and functions onAccept, onClose and onOpenDialog when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should set itemToDelete to an empty object, when onAccept Is called', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    result.current.onAccept();

    // Assert
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });

  it('should set isOpen false, when onClose Is called', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    result.current.onClose();

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should set isOpen to true and itemToDelete when onOpenDialog Is called fedded with an itemToDelete object', () => {
    // Arrange
    const personToDelete: Lookup = { id: '123', name: 'John Doe' };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    result.current.onOpenDialog(personToDelete);

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(personToDelete);
  });
});
