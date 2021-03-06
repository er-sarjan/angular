/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TreeNode, emptyTree} from '../util';

export class TreeRootComponent { data: TreeNode = emptyTree; }

export class TreeBranchComponent { data: TreeNode; }

export class TreeLeafComponent { data: TreeNode; }
