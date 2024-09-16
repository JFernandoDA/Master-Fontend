import * as mapper from './project.mapper';
import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

const apiProject: apiModel.Project = {
  id: '1234',
  name: 'proyectName',
  externalId: '12AA',
  comments: 'test project',
  isActive: true,
  employees: [
    { id: '1', isAssigned: true, employeeName: 'Juan' },
    { id: '2', isAssigned: false, employeeName: 'Paco' },
  ],
};

describe('Project mapper from API to VM specs', () => {
  it('If the project is undefined, should return a new proyect', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result = mapper.mapProjectFromApiToVm(project);
    const emptyProject = viewModel.createEmptyProject();
    //
    expect(result).toEqual(emptyProject);
  });

  it('If the project is null, should return a new proyect', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result = mapper.mapProjectFromApiToVm(project);
    const emptyProject = viewModel.createEmptyProject();
    //
    expect(result).toEqual(emptyProject);
  });

  it('Should return a project view model when its feed with a project api model', () => {
    // Arrange

    // Act
    const result = mapper.mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(apiProject);
  });

  it('Should return an empty employees array when employee property is undefined ', () => {
    // Arrange
    apiProject.employees = undefined;

    // Act
    const result = mapper.mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result.employees).toEqual([]);
  });

  it('Should return an empty employees array when employee property is null ', () => {
    // Arrange
    apiProject.employees = null;

    // Act
    const result = mapper.mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result.employees).toEqual([]);
  });

  it('Should return an empty employees array when employee is empty ', () => {
    // Arrange
    apiProject.employees = [];

    // Act
    const result = mapper.mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result.employees).toEqual([]);
  });
});
