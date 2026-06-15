(() => {

    // Archivos a evaluar
    const filesToEvaluate = [
        { id: 1, isMarkedForDeletion: false },
        { id: 2, isMarkedForDeletion: false },
        { id: 3, isMarkedForDeletion: true },
        { id: 4, isMarkedForDeletion: false },
        { id: 5, isMarkedForDeletion: false },
        { id: 7, isMarkedForDeletion: true },
    ];

    // Archivos marcados para borrar
    const filesMarkedForDeletion =
        filesToEvaluate.map(file => file.isMarkedForDeletion);

    class User { }

    interface UserInterface { }

    // Fecha actual
    const currentDate = new Date();

    // Días transcurridos
    const elapsedDays: number = 23;

    // Número de archivos en un directorio
    const filesInDirectory: number = 33;

    // Primer nombre
    const firstName = 'Fernando';

    // Apellido
    const lastName = 'Herrera';

    // Días desde la última modificación
    const daysSinceLastModification = 12;

    // Máximo de clases por estudiante
    const maxClassesPerStudent = 6;

})();