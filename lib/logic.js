/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Append new patient visit info
 * @param {org.ehr.mynetwork.updateVisits} updateVisits
 * @transaction
 */
async function updateVisits(tx) {
    // Add new visit to patient visits array
    tx.PatientInfo.visits.push(tx.newVisit);

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.ehr.mynetwork.PatientInfo');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.PatientInfo);

    /* Emit an event for the modified asset.
    let event = getFactory().newEvent('org.ehr.mynetwork', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);*/
}
