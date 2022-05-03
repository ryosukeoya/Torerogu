module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath.replace('src/pages', 'src/tests/snapshots') + snapshotExtension,

  resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath.replace('src/tests/snapshots', '').replace(snapshotExtension, ''),

  testPathForConsistencyCheck: 'some/snapshot.test.tsx',
};
